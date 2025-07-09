function getFirstElement<ElementType>(array:ElementType[]) {
return array[0]
}

const numbers = [1,2,3,4]
getFirstElement(numbers)

const strs = ["ram","shyam","hare"]
getFirstElement(strs)

// GIVING DEFAULT TYPE AS ERROR GIVES NUMBER DATA TYPE IN FORM OF STATUS
// type APIResponse<Data = {status: number}> = {
//     data: Data,
//     err: boolean,
// }

//AS WE KNOW API IS GENERALLY AN OBJECT RETURN TYPE
type APIResponse<Data extends object = {status: number}> = {
    data: Data,
    err: boolean,
}

// const response: APIResponse<{name: string, age: number}> = {
//     data:{
//         name:"Hey",
//         age: 322,
//     },
//     err: false,
// }

type UserResponse = APIResponse<{name: string, age: number}>
type BlogResponse = APIResponse<{title: string, page: number}>

const response:UserResponse = {
    data:{
        name:"Hey",
        age: 322,
    },
    err: false,
}

const BlogResponse:BlogResponse = {
    data:{
        title:"Hey",
        page: 322,
    },
    err: false,
}
