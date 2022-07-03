import { useState } from "react";
import PublishButton from "./PublishButton";

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    const publishArticle = () => {
        setIsPublished(true);
    }
    // console.log(isPublished);
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
        </>
    )
}

export default Article