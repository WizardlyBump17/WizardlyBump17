import Head from 'next/head'
import HeaderFooter from '../components/header-footer'
import Image from 'next/image'

import { 
    Container,
    List,
    CenterFlex,
    HGroup
} from '../components/component_utils'
import styles from '../styles/index.module.css'

export default function Home() {
    return (<>
        <HeaderFooter>
            <Head>
                <title>WizardlyBump17</title>
            </Head>

                <CenterFlex>
                    <HGroup>
                        <h1>I'm WizardlyBump17,</h1>
                        <h3>a Spigot plugins developer</h3>
                    </HGroup>
                </CenterFlex>

                <p>I'm constantly learing and doing plugins and I plan, in the future, to release my own Minecraft server.</p>

                <Container id="teams">
                    <h3>I'm freelancer at:</h3>
                    <List>
                        <li>{getTeamImage('DevRoom', '/images/devroom.png')}</li>
                        <li>{getTeamImage('Candor Services', '/images/candor.png')}</li>
                        <li>{getTeamImage('Devnics Services', '/images/devnics.png')}</li>
                    </List>
                </Container>

                <Container>
                    <h3>These things are guaranteed to be with your plugin if you choose me:</h3>
                    <List className={styles.warranties}>
                        <li>{getWarrantyImage('Peformance', '/images/clock.png')}</li>
                        <li>{getWarrantyImage('High quality', '/images/high-quality.png')}</li>
                        <li>{getWarrantyImage('Configuration', '/images/configuration.png')}</li>
                        <li>{getWarrantyImage('Support', '/images/support.png')}</li>
                    </List>
                </Container>
        </HeaderFooter>
    </>)
}


function getTeamImage(name, image) {
    return (<>
        <h2>{name}</h2>
        <Image src={image} alt={name} width="128" height="128"/>
        <figcaption/>
    </>)
}

function getWarrantyImage(warranty, image) {
    return (<>
        <h4>{warranty}</h4>
        <Image src={image} alt={warranty} width="64" height="64"/>
    </>)
}