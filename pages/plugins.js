import HeaderFooter from '../components/header-footer'
import Head from 'next/head'

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
                            <SmallP>{`Tested versions: ${plugin.mc_versions.tested.join(', ')}`}</SmallP>
                        </div>
                    </Left>

                    <div>
                        <p className={styles.prefix_text}>{plugin.description.prefix_text}</p>
                        <ul className={styles.content}>
                            {plugin.description.content.map(content => <li key={Math.random().toString(36).substr(2, 9)}>- {content}</li>)}
                        </ul>

                        <ul className={styles.images}>
                            {plugin.description.images.map(image => <li key={Math.random().toString(36).substr(2, 9)}>
                                <img src={image.split('\\-')[0]} alt={image.split('\\-')[1]}/>
                            </li>)}
                        </ul>
                    </div>
                </li>
            ))}
        </List>
    </>)
}