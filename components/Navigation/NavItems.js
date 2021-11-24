import Link from 'next/link'
import classes from "../../styles/NavItems.module.css";
const NavItems = ({props, children})=>{
    return(
        <div className={classes.container}>
          <div className="container">
            <ul className={classes.ul2} >
                <li className={classes.li2} >
                    <Link style={{ textDecoration: 'none !important' }} href="/">Home</Link>
                </li>
                <li className={classes.li2}>
                    <Link href="/user" >User</Link>
                </li>
                <li className={classes.li2}>
                    <Link href="/adduser" > Add new User</Link>
                </li>
                <li className={classes.li2}>
                    <Link href="/group" >Group </Link>
                </li>
                <li className={classes.li2}>
                    <Link href="/addgroup" >New Group </Link>
                </li>
                <li className={classes.li2}>
                    <Link href="/addgroupexpense" >Add Group expense</Link>
                </li>
                <li className={classes.li2}>
                    <Link href="/group-expenses" >Group expense</Link>
                </li>
                
            </ul>
          </div>
        </div>
    )
}

export default NavItems;