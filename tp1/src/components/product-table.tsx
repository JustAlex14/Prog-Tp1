"use client";

import {ProductAttribute, ProductFiltersResult} from "../types";
import { useState } from 'react';
import { TextInput, Checkbox, Group, Box } from '@mantine/core';
import { ProductsCategoryData } from "tp-kit/types";
import { Button } from "tp-kit/components";
import { useForm } from '@mantine/form';
import {ProductRating} from "tp-kit/components/products";

type Props = {
    attributes: ProductAttribute[]
}

export default function ProductAttributesTable({attributes}: Props)  {

    return (
        <table>
            <tbody>
            {console.log(attributes)}
            {attributes.map(attribute => <tr><td>{attribute.label}</td><td><ProductRating icon = 'circle' value={attribute.rating}/></td></tr>)}
            </tbody>
        </table>

    )
}

