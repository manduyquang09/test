import { Text, View, TextInput, Button, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"
import InputField from "./app/component/root/InputFiled"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { memo, useEffect, useState } from "react"
import { BaseLayout, CustomButton, Space } from "./app/component"
let i = 0;

const Test = () => {
  enum STRINGS{
    NORTH, 
    VALUE, 
    SATATE
  }
  enum StatusCodes {
    NotFound =404, 
    Success= 200, 
    Accepted =202, 
    BadRequest =400
  }
  const falsy :Boolean  = true
  const [Value, setValues] = useState<Boolean>(false)
  const arr: any[]= ["quang",5,4]
  arr[arr.length+1]= 6; 
  let name1 = arr[arr.length]

  let name :any = "25757"
const Click =()=>{

}
  return (
 <BaseLayout>
<Text>{JSON.stringify(STRINGS[0])}</Text>
 <Text>{StatusCodes.Accepted}</Text>
 <Space h={30}/>
 <CustomButton
 onPress={()=>Click()}
 />
 </BaseLayout>
  )
}

export default Test