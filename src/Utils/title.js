import { useEffect } from "react";


const usetitle = (title) => {
    const MainTitle='Gadget Heaven'
    useEffect(() => {
        document.title = title ? `${title}|${MainTitle}` : MainTitle;
    }, [title])
}

export default usetitle;