import React from 'react'
import {Controller, FieldValues, Path, Control} from "react-hook-form";

import {
    FormItem,
    FormLabel,
    FormControl,
    FormMessage, FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type: 'text' | 'password' | 'email' | 'file';

}


const FormField = <T extends FieldValues>({
                                              control,
                                              name,
                                              label,
                                              placeholder,
                                              type="text"}: FormFieldProps<T>) =>
                                            (
                                            <Controller
                                                control={control}
                                                name={name}
                                                render={({ field }) =>        (
                                                <FormItem>
                                                    <FormLabel className="label">{label}</FormLabel>
                                                    <FormControl>
                                                    <Input className="input"
                                                           placeholder={placeholder}
                                                           type={type}
                                                           {...field}
                                                    />
                                                    </FormControl>
                                                                                                        <FormMessage />
                                                </FormItem>
                                                )}
                                            />
                                        );

export default FormField
