import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contents/AuthContext"
import { useContext } from "react"

function Navbar() {

    const navgate = useNavigate()

    const { handleLogout } = useContext(AuthContext)

    function logout(){
        handleLogout()
        alert('O usuario foi desconectado com sucesso')
        navgate('/')
    }
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    Blog Pessoal

                    <div className='flex gap-4'>
                        Postagens
                        <Link to='/temas' className='hover:underline'>Tema</Link>
                         <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                         Perfi
                        <Link to="" onClick={logout} className="hover:underline">
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar