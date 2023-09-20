"use client";

import { ProductFiltersResult } from "../types";
import { useState } from 'react';
import { TextInput, Checkbox, Group, Box } from '@mantine/core';
import { ProductsCategoryData } from "tp-kit/types";
import { Button } from "tp-kit/components";
import { useForm } from '@mantine/form';

type Props = {
    onChange : (values: ProductFiltersResult) => void,
    categories: ProductsCategoryData[]
}

export default function ProductFilters({categories, onChange} : Props)  {
    const form = useForm<ProductFiltersResult>({
        initialValues: {
            search : '',
            categoriesSlug : []
        },
      });

    return (
        <Box maw={340}>
            <form onSubmit={form.onSubmit((values) => onChange(values))}>
                <div className="flex flex-col">
                <TextInput {...form.getInputProps('search')} />
                <Checkbox.Group
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
                    <Button type="submit" variant="ghost" >Submit</Button>
                </Group>
                </div>
            </form>
        </Box>
    )
}
      
