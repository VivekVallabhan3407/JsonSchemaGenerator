import {toast} from 'react-toastify';

export const downloadFile=(
    content: string,
    filename: string,
    type: string
)=>{
    if(!content){
        toast.error('Nothing to download!');
        return;
    }
    const blob=new Blob([content],{type});
    const url=URL.createObjectURL(blob);

    const a=document.createElement("a");
    a.href=url;
    a.download=filename;
    a.click();

    URL.revokeObjectURL(url);

    toast.success(`Downloaded ${filename} successfully!`);
}