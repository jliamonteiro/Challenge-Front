import Footer from '@/components/Footer/Footer' 
import Header from '@/components/Header/Header'
import AddCarro from "@/components/AdicionarCarro/AdicionarCarro";
import Funcionalidade from '@/components/Funcionalidade/Funcionalidade';
import Pecas from '@/components/Pecas/Pecas';

export default function FuncionalidadePagina() {
    return (
        <>
            <Header />
            <AddCarro/>
            <Funcionalidade />
            <Pecas/>
            <Footer />
        </>
    )
}