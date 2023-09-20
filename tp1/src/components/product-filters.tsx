"use client";

import { ProductFilterResult } from "../types";
import { useState } from 'react';
import { TextInput, Checkbox, Group } from '@mantine/core';
import { ProductsCategoryData } from "tp-kit/types";
import { Button } from "tp-kit/components";
import { useForm } from '@mantine/form';

type Props = {
    onChange : (values: ProductFilterResult) => void,
    categories: ProductsCategoryData[]
}

export default function ProductFilters({categories, onChange} : Props)  {
    const form = useForm<ProductFilterResult>({
        initialValues: {
            search : '',
            categoriesSlug : []
        },
      });

    return (
        <div>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput {...form.getInputProps('search')} />
                <Checkbox.Group
                    label=""
                    description=""
                    withAsterisk
                    {...form.getInputProps('categoriesSlug')}
                    >
                    <Group mt="xs">
                        {categories.map(category => 
                            <Checkbox value={category.slug} label={category.name + " (" + category.products.length + ")"} />
                        )}
                    </Group>
                </Checkbox.Group>
                <br/>
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </div>
    )
}
      
