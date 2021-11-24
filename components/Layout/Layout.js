import NavItems from "../Navigation/NavItems";
import Meta from "./Meta";
const Layout = ({props, children})=>{
    return(
        <>
        <Meta/>
        <NavItems/>
        <main className="pt_50px">
            {children}
        </main>
        </>
    );
}

export default Layout;