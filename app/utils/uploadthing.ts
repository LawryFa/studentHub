import { generateComponents } from "@uploadthing/react"; 

import type { FileRouter } from "uploadthing/next"; 
import { OurFileRouter } from "../api/uploadthing/core";

export const { UploadButton, UploadDropzone, Uploader } = generateComponents<OurFileRouter>(); 