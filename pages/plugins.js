import HeaderFooter from '../components/header-footer'
import Head from 'next/head'
import Image from 'next/image'

import { 
    List, 
    Left, 
    SmallP, 
    StrongH4
} from '../components/component_utils'
import styles from '../styles/plugins.module.css'

import {getPluginsData} from '../lib/plugins'

export async function getStaticProps() {
    const plugins = getPluginsData();
    return {
        props: {
            freePlugins: plugins.filter(plugin => !plugin.paid),
            paidPlugins: plugins.filter(plugin => plugin.paid)
        }
    }
}

export default function Plugins({freePlugins, paidPlugins}) {
    return (
        <HeaderFooter>
            <Head>
                <title>Plugins</title>
            </Head>

            <h1>Free plugins</h1>
            {showPlugins(freePlugins)}

            <h1>Paid plugins</h1>
            {showPlugins(paidPlugins)}
        </HeaderFooter>)
}

function showPlugins(plugins) {
    return (<>
        <List className={styles.plugins}>
            {plugins.map(plugin => (
                <li key={plugin.id}>
                    <StrongH4>{plugin.name} v{plugin.version}</StrongH4>
                    <h6>{plugin.short_description}</h6>

                    <Left>
                        <div className={styles.versions}>
                            <SmallP>{`Native MC version: ${plugin.mc_versions.native}`}</SmallP>
                            {plugin.mc_versions.tested && (
                                <SmallP>{`Tested versions: ${plugin.mc_versions.tested.join(', ')}`}</SmallP>
                            )}
                        </div>
                    </Left>

                    <div>
                        {plugin.description.text.map(text => <p className={styles.text}>{text}</p>)}
                        
                        <ul className={styles.content}>
                            {plugin.description.content.map(content => <li key={Math.random().toString(36).substr(2, 9)}>- {content}</li>)}
                        </ul>

                        {plugin.description.images && (
                            <ul className={styles.images}>
                                {plugin.description.images.map(image => 
                                    <li key={Math.random().toString(36).substr(2, 9)}>
                                        <Image src={image} width="370" height="208" layout="responsive"/>
                                    </li>)}
                            </ul>
                        )}

                        {plugin.description.videos && (
                            <ul className={styles.videos}>
                                {plugin.description.videos.map(video => 
                                    <li key={Math.random().toString(36).substr(2, 9)}>
                                        <iframe width="370" height="208" src={video} layout="responsive"/> {/*????*/}
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </li>
            ))}
        </List>
    </>)
}