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
                    <>
                        {categories.map(category => 
                            <Checkbox mt="md" value={category.slug} label={category.name + " (" + category.products.length + ")"} />
                        )}
                   </>
                </Checkbox.Group>
                <br/>
                <Button type="submit">Filtrer</Button>
                </div>
            </form>
        </Box>
    )
}
      
