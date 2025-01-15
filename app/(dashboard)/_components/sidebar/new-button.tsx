"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog,DialogContent,DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import {Hint} from "@/components/hint";

export const NewButton = () => {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label="Create Room">
                        <button className="bg-white/25 rounded-md flex items-center justify-center opacity-60 hover:opacity-80 transition">
                            <Plus className="text-white text-sm"/>
                        </button>
                    </Hint>
                    

                </div>
            </DialogTrigger>
            <DialogContent className="bg-transparent p-0 border-none max-w-[440px]">
                <DialogTitle>
                <CreateOrganization />
                </DialogTitle>
                
            </DialogContent>
        </Dialog>
    )
}