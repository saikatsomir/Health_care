import React from 'react';
import { useForm } from 'react-hook-form';

const Example = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />      <br />
      <input {...register("exampleRequired", { required: true })} /> <br />

      {errors.exampleRequired && <span>This field is required</span>} <br />
      
      <input type="submit" />
    </form>
    );
};

export default Example;