import React from 'react'
import { FormControl, Input, InputLabel } from '@material-ui/core'
interface ICustomInput {
    handleChange: (e:any) => void;
    label: string
    type:string
    name:string
    value: string
    required: boolean
}
export const CustomInput = ({handleChange, label, ...otherProps}:ICustomInput) => (
    <FormControl style={{marginTop: '18px'}} >
            <InputLabel>{label}</InputLabel>
            <Input  onChange={handleChange} {...otherProps}/>
    </FormControl>
)