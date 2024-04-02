import Bouton from '../Basics/Bouton';

export default function Footer() {

    return (
        <footer className='w-3/4 p-6'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-xl font-bold'>ITVX Presents</h2>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-xl font-bold'>ITVX Presents</h2>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-xl font-bold'>ITVX Presents</h2>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                    <Bouton intent="underline" size="footer">ITVX</Bouton>
                </div>
            </div>
            <img src="assets/images/logo-itvX.webp" alt="Logo" />
        </footer>
    );
}