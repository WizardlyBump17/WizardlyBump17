import Link from 'next/link'

export default function HeaderFooter({children}) {
    return (<>
        <header>
            <menu type="toolbar">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/plugins">
                        <a>Plugins</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#temp-contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </menu>
        </header>

        {children}
        
        <footer>
            <p>Developed by WizardlyBump17.</p>
        </footer>
    </>)
}