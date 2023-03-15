import { useState } from "react"

const Section = ({title,description,isVisible,setIsVisible}) => {
    //Declaring state variable for building an accordion
    //const[isVisible,setIsVisible] = useState(false)
    return(
        <div className="border border-black p-2 m-2">
            <h1 className="font-bold text-2xl mb-2">{title}</h1>
            {isVisible ? (
                <>
                <button onClick={()=>{
                    //Earlier local state was setting value to isVisible but now since state is lifted up ... it's setting
                    //value using the isVisible parameter
                    setIsVisible(!isVisible)
                }}>Hide</button>
                <p>{description}</p>
                </>
            ):
            (<button onClick={()=>{
                setIsVisible(isVisible)
            }}>Show</button>
            )}            
        </div>
    )
}

const InstaMart = () => {
    //LIFTING THE STATE UP
    const[isSectionVisible,setIsSectionVisible] = useState("about")//passing the key i.e. sections name about will be visible by default
    return (
    <div>
        {/* <h1>This is Insta Mart ka Page</h1>
        <p>It contains many restaurants</p> */}
        {/* 
        Instead of creating individual components which works as just sections on your webpage. Just make a reusable component
        and keep using it again and again.
        <AboutInstaMart/>
        <DetailsOfInstaMart/>
        <Teamsofinstamart />
        <Product/>
        <Careers/> */}
        <h1 className="font-bold text-3xl p-2 m-2">InstaMart</h1>
        <Section title={"About InstaMart"} 
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
            //Passing boolean value here
            isVisible={isSectionVisible==="about"}
            setIsVisible={()=>{isSectionVisible==="about" ? setIsSectionVisible("") : setIsSectionVisible("about")}}/>
        <Section title={"Team InstaMart"} 
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
            isVisible={isSectionVisible==="team"}
            setIsVisible={()=>{isSectionVisible==="team" ? setIsSectionVisible("") : setIsSectionVisible("team")}}/>
        <Section title={"Products"} 
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
            isVisible={isSectionVisible==="products"}
            setIsVisible={()=>{isSectionVisible==="products" ? setIsSectionVisible("") : setIsSectionVisible("products")}}/>
        <Section title={"Career"} 
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
            isVisible={isSectionVisible==="career"}
            setIsVisible={()=>{isSectionVisible==="career" ? setIsSectionVisible("") : setIsSectionVisible("career")}}/>

    </div>)
}

export default InstaMart