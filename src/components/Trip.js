import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/p-1.jpg"
import Trip2 from "../assets/p-6.jpg"
import Trip3 from "../assets/p-5.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            <div className="tripcard">
                <TripData 
                image = {Trip1}
                heading = {"Trip in Mumbai"}
                text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur omnis veniam ut error rem delectus veritatis quaerat harum. Repellendus expedita ullam neque nisi cupiditate! Nostrum facilis impedit dignissimos neque consequatur maxime."}
                />

                <TripData 
                image = {Trip2}
                heading = {"Trip in Iran"}
                text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur omnis veniam ut error rem delectus veritatis quaerat harum. Repellendus expedita ullam neque nisi cupiditate! Nostrum facilis impedit dignissimos neque consequatur maxime."}
                />

                <TripData 
                image = {Trip3}
                heading = {"Trip in Korea"}
                text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur omnis veniam ut error rem delectus veritatis quaerat harum. Repellendus expedita ullam neque nisi cupiditate! Nostrum facilis impedit dignissimos neque consequatur maxime."}
                />

            </div>

        </div>
    )
}

export default Trip;