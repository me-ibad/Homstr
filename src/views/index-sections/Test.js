import React, { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form';
function Test() {


    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstname" ref={register} /> {/* register an input */}
            <input name="lastname" ref={register({ required: true })} />
            {errors.lastname && 'Last name is required.'}
            <input name="age" ref={register({ pattern: /\d+/ })} />
            {errors.age && 'Please enter number for age.'}
            <input type="submit" />
        </form>

    );

}

export default Test




    //     const [person, setPerson]=useState(null);
//    useEffect(async() => {
//        const response = await fetch("https://api.randomuser.me/");
//        const data=await response.json();
//        const [item]=data.results;
//         setPerson(item);
//    }, [])
//     return (
//         <div>
//             loading.......
//              {person && <div>{person.name.first}</div>} 
//         </div>
//     )

