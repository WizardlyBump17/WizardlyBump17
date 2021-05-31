import Head from 'next/head'
import HeaderFooter from '../components/header-footer'
import Image from 'next/image'

import styles from '../styles/index.module.css'

export default function Home() {
    return (<>
        <HeaderFooter>
            <Head>
                <title>WizardlyBump17</title>
            </Head>

                <span className="center-flex hgroup">
                    <h1>I'm WizardlyBump17,</h1>
                    <h3>a Spigot plugins developer</h3>
                </span>

                <p>I'm constantly learing and doing plugins and I plan, in the future, to release my own Minecraft server.</p>

                <div id="teams" className="container">
                    <h3>I'm freelancer at:</h3>
                    <ul className="center-flex list">
                        <li>
                            <figure>
                                <h2>Candor Services</h2>
                                <Image src="/images/candor.png" alt="Candor Services" width="128" height="128"/>
                                <figcaption></figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <h2>DevRoom Team</h2>
                                <Image src="/images/devroom.png" alt="DevRoom Team" width="128" height="128"/>
                                <figcaption></figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <h2>Devnics Services</h2>
                                <Image src="/images/devnics.png" alt="Devnics Services" width="128" height="128"/>
                                <figcaption></figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>

                <div className={`center-flex container`}>
                    <h3>These things are guaranteed to be with your plugin if you choose me:</h3>
                    <ul className={`${styles.warranties} list`}>
                        <li>
                            <h4>Peformance</h4>
                            <Image src="/images/clock.png" alt="Peformance" width="64" height="64"/>
                        </li>
                        <li>
                            <h4>High quality</h4>
                            <Image src="/images/high-quality.png" alt="High quality" width="64" height="64"/>
                        </li>
                        <li>
                            <h4>Configuration</h4>
                            <Image src="/images/configuration.png" alt="Configuration" width="64" height="64"/>
                        </li>
                        <li>
                            <h4>Support</h4>
                            <Image src="/images/support.png" alt="Support" width="64" height="64"/>
                        </li>
                    </ul>
                </div>
        </HeaderFooter>
    </>)
}
