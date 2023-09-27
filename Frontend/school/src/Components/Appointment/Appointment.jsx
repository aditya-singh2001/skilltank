import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css'
export default function Appointment() {
    const [mentor, setMentor] = useState([]);
    const { id } = useParams();
    const nav=useNavigate();
    useEffect(() => {
        fetchMentor();
    }, [])
    const [startDate, setStartDate] = useState(null);
    const fetchMentor = () => {
        fetch(`https://harlequin-hippo-tam.cyclic.cloud/mentor/${id}`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then(res => res.json()).then((res) => {
            if (res.message) {
                alert(`${res.message}`)
            } else {
                setMentor(res)
                console.log(res)
            }
        }).catch(err => console.log(err))
    }
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [form,setForm]=useState({date:selectedDate,time:""})

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const datePickerOptions = {
        minDate: new Date(),
        maxDate: new Date().setDate(new Date().getDate() + 30),
    };

    const bookAppointmentFunc=()=>{
        if(form.date !="" && form.time!=""){
            alert("Appointment successfully booked")
            nav("/");
        }else{
            alert("Please fill all the details")
        }
    }
    console.log(form)
    return (
        <div>
            {
                mentor.length == 0 ? <h1 style={{ textAlign: "center", color: "red", fontSize: "40px", marginTop: "40px" }}>Mentor not found</h1>
                    :
                    <div>
                        <div>
                            <h1 style={{ textAlign: "center", color: "blue", fontSize: "40px", marginTop: "40px" }}>Book Appointment</h1>
                        </div>
                        <img style={{ width: "150px", height: "150px", margin: 'auto', marginTop: '10px' }} src={mentor[0].images} />
                        <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '10px' }}>{mentor[0].name}</p>
                        <div style={{width:"200px",margin:"auto"}}>
                            <label >Select Date</label>
                            <br />
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="MMMM d, yyyy"
                                {...datePickerOptions}
                                className='custom-datepicker'
                                placeholderText='Select Date'
                            />
                            <label style={{ textAlign: "center" }}>Select time</label>
                            <br />
                            <select onChange={(e)=>{setForm({...form,time:e.target.value})}} style={{ border: '1px solid black' }}>
                                <option value="">Select time</option>
                                <option value="12:00pm - 1:00pm">12:00pm - 1:00pm</option>
                                <option value="1:00pm - 2:00pm">1:00pm - 2:00pm</option>
                                <option value="2:00pm - 3:00pm">2:00pm - 3:00pm</option>
                                <option value="4:00pm - 5:00pm">4:00pm - 5:00pm</option>
                                <option value="6:00pm - 7:00pm">6:00pm - 7:00pm</option>
                                <option value="7:00pm - 8:00pm">7:00pm - 8:00pm</option>
                            </select>
                            <br />
                            <button onClick={bookAppointmentFunc} style={{ backgroundColor: "lightblue", padding: "5px 7px", fontSize: "18px",borderRadius:"5px",marginTop:"10px"}}>Book Now</button>
                        </div>

                    </div>
            }
        </div>
    )
}
