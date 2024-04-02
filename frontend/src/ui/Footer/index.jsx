import Bouton from '../Basics/Bouton';

export default function Footer() {

    return (
        <footer className='w-footerWidth p-movieLeft flex flex-col gap-10'>
            <div className='flex flex-row justify-between flex-wrap justify-between gap-4'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-3xl font-bold'>ITVX Presents</h2>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX Premium</Bouton>
                    <Bouton intent="underline" size="footer">TV Guide</Bouton>
                    <Bouton intent="underline" size="footer">Be on TV</Bouton>
                    <Bouton intent="underline" size="footer">Competitions</Bouton>
                    <Bouton intent="underline" size="footer">Signed stories</Bouton>
                    <Bouton intent="underline" size="footer">Shop</Bouton>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-3xl font-bold'>Corporate</h2>
                    <Bouton intent="underline" size="footer">ITV Plc</Bouton>
                    <Bouton intent="underline" size="footer">Social Purpose</Bouton>
                    <Bouton intent="underline" size="footer">Jobs</Bouton>
                    <Bouton intent="underline" size="footer">Press Centre</Bouton>
                    <Bouton intent="underline" size="footer">ITV Media</Bouton>
                    <Bouton intent="underline" size="footer">Commissioning</Bouton>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-3xl font-bold'>Information</h2>
                    <Bouton intent="underline" size="footer">TV sign in code</Bouton>
                    <Bouton intent="underline" size="footer">ITVX Help</Bouton>
                    <Bouton intent="underline" size="footer">ITV Contact us</Bouton>
                    <Bouton intent="underline" size="footer">Terms of use</Bouton>
                    <Bouton intent="underline" size="footer">Privacy & Cookie Information</Bouton>
                    <Bouton intent="underline" size="footer">Cookie Settings</Bouton>
                </div>
            </div>
            <p className='text-navigation text-sm font-semibold'>© ITV Consumer Limited 2024</p>
            <img className="w-24" src="/assets/images/logo-itvX.webp" alt="Logo"/>
        </footer>
    );
}