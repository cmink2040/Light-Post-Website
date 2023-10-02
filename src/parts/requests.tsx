import {ChangeEvent, useState} from "react";


type APIType = {
    setPostType: (post_type: string) => void
}

const API = (props:APIType) => {
    const updatePostType = (e:ChangeEvent<HTMLSelectElement>)=> {
        props.setPostType(e.target.value)
    }

    return (
        <div className={'m-2 flex flex-col w-[30rem]'}>
            <div className={'text-xl font-bold p-4 bg-zinc-500 m-2'}>
                Make a Request
            </div>
            <input className={'rounded-full bg-zinc-700 focus:outline-1 px-4 py-1 text-sm'}
            placeholder={'https://test.tsmks.com/api?'}/>

            <div className={'flex flex-row items-center p-2'}>
                Request Method
                <select className={'ml-2 text-gray-200 bg-zinc-700 focus:outline-none px-4 py-2'}
                onChange={updatePostType}>
                    <option> GET</option>
                    <option> POST</option>
                    <option> PUT</option>
                    <option> DELETE</option>
                    <option> PATCH</option>
                    <option> OPTIONS</option>
                </select>
            </div>

        </div>
    )
}

type ReqOptionsType = {
    post_type: string

    setPostContent: (post_content: string) => void
}
const ReqOptions = (props:ReqOptionsType) => {
    return (
        <div>
            {
               props.post_type === 'GET' ?
                   <div>GET</div> :
                   props.post_type === 'POST' ?
                   <PostInput setPostContent={props.setPostContent}/> :

                     props.post_type === 'PUT' ?
                     <div>PUT</div> :

                          props.post_type === 'DELETE' ?
                            <div>DELETE</div> :

                                props.post_type === 'PATCH' ?
                                    <div>PATCH</div> :


                                            <div>OPTIONS</div>


            }
        </div>
    )   
}

type PostInputType = {
    setPostContent: (post_content: string) => void
}

const PostInput = (props:PostInputType) => {
    const updatePostContent = (e:ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        props.setPostContent(e.target.value)

    }

    return (
        <div>
            <textarea className={'bg-zinc-700 focus:outline-1 h-64 px-4 py-1 text-sm'}
                   placeholder={'{"key": "value"}'}
            onChange={updatePostContent}/>
        </div>
    )
}


const Responses = () => {
    return (
        <div>
            <button className={'bg-blue-500 text-white px-16 py-4  rounded-2xl'}>
                Submit
            </button>
        </div>
    )

}

const RequestMaker = () => {
    const [post_type, setPostType] = useState('GET')
    const [post_content, setPostContent] = useState('')


    return (
        <div>
            <API setPostType={setPostType} />
            <ReqOptions post_type={post_type} setPostContent={setPostContent}/>
            <Responses />
        </div>
    )

}


export default RequestMaker