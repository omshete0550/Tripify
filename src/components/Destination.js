import Mountain1 from "../assets/g-8.jpg"
import Mountain2 from "../assets/p-2.jpg"
import America from "../assets/p-3.jpg"
import Paris from "../assets/p-4.jpg"
import "./DestinationStyles.css"
import DestinationData from "./DestinationData"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            <DestinationData 
            className = "first-des"
            heading="Toronto, Canada"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur omnis veniam ut error rem delectus veritatis quaerat harum. Repellendus expedita ullam neque nisi cupiditate! Nostrum facilis impedit dignissimos neque consequatur maxime. Architecto, necessitatibus! Quibusdam natus possimus voluptates distinctio nihil. Reiciendis sequi explicabo, vitae aspernatur enim impedit dolore non animi id doloremque accusamus, pariatur temporibus nobis est at fugiat perferendis voluptates nam unde doloribus iure dolorum. Officiis veniam pariatur suscipit est corporis vel hic. Iusto."
            img1={America}
            img2={Mountain2}
            />

            <DestinationData 
            className = "first-des-reverse"
            heading="France, Europe "
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur omnis veniam ut error rem delectus veritatis quaerat harum. Repellendus expedita ullam neque nisi cupiditate! Nostrum facilis impedit dignissimos neque consequatur maxime. Architecto, necessitatibus! Quibusdam natus possimus voluptates distinctio nihil. Reiciendis sequi explicabo, vitae aspernatur enim impedit dolore non animi id doloremque accusamus, pariatur temporibus nobis est at fugiat perferendis voluptates nam unde doloribus iure dolorum. Officiis veniam pariatur suscipit est corporis vel hic. Iusto."
            img1={Paris}
            img2={Mountain1}
            />
            
        </div>
    )
}

export default Destination