import React from "react";
import {Input} from './Component';

export default {
    title: 'Component/Input',
    component: Input

}

const Template = (args) => <Input {...args} />

export const Normal = Template.bind({});
Normal.args={
    label:'Normal',
    placeholder: 'Enter some data'
}