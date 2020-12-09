import { GraphQLClient } from 'graphql-request'
import { GRAPH_API } from 'constants/index'
import { CategoryLine, IGeneralResponseDTO } from './interfaces'

function graphqlRequestHandler(name: any, query: any, variables: any, headers = {}): Promise<any> {
    return new Promise(
        (resolve, reject) => {
            let client = headers === null ? new GraphQLClient(GRAPH_API) : new GraphQLClient(GRAPH_API, { headers })
            client.request(query, variables)
                .then((data:any) => {
                    resolve(name ? data[name] : data)
                })
                .catch(error => {
                    reject(error.response ? error.response.errors.map((i: any) => i.message) : error)
                })
        }
    )
};


export async function apiGETPRODUCEPERCATEGORY(id: number, limit: number): Promise<Array<any>> {
    return new Promise(
        (resolve, reject) => {
            const query =
                ` 
                query variables($category: ID!,$limit: Int){
                    getProducePerCategories(category:$category,limit:$limit){
                      id
                      name
                      pickoftheweek
                      category
                      packaging{
                        id
                        packaging
                      }
                    }
                  }`
            const variables = {
                category: id,
                limit
            }
            graphqlRequestHandler("getProducePerCategories", query, variables)
                .then(data => {
                    const dataCheck = data as Array<any>
                    if (dataCheck) {
                        resolve(dataCheck)
                    } else {
                        reject({ message: "no data" })
                    }
                })
                .catch(error => {
                    console.log("err:", error)
                    reject(error)
                })
        }
    )
};

export async function apiGETPRODUCECATEGORIES(): Promise<Array<any>> {
    return new Promise(
        (resolve, reject) => {
            const query =
                ` 
                query {
                    getProduceCategories{
                      id
                      name
                    }
                  }`
            const variables = {}
            graphqlRequestHandler("getProduceCategories", query, variables)
                .then(data => {
                    const dataCheck = data as Array<any>
                    if (dataCheck) {
                        resolve(dataCheck)
                    } else {
                        reject({ message: "no data" })
                    }
                })
                .catch(error => {
                    console.log("err:", error)
                    reject(error)
                })
        }
    )
};

export async function apiGETALLPRODUCEPERCATEGORY(_productLimit:number,_allProduce?:boolean): Promise<Array<CategoryLine>> {
    return new Promise(
        (resolve, reject) => {
            const query =
                `
                query variables($productLimit: Int, $allProduce:Boolean){
                    getAllProducePerCategories(productLimit:$productLimit,allProduce:$allProduce){
                        id
                        name
                        products{
                            id
                            name
                            pickoftheweek
                            category
                            upperPrice
                            lowerPrice
                            packaging{
                                id
                                packaging
                                weight
                            }
                            variety{
                                id
                                name
                            }
                        }
                    }
                    
                }
            `
            const variables = {
                productLimit:_productLimit,
                allProduce:_allProduce
            }
            graphqlRequestHandler("getAllProducePerCategories", query, variables)
                .then(data => {
                    const dataCheck = data as Array<any>
                    if (dataCheck) {
                        resolve(dataCheck)
                    } else {
                        reject({message: "no data"})
                    }
                })
                .catch(error => {
                    console.log("err:", error)
                    reject(error)
                })
        }
    )



}


export async function apiSENDPRODUCTREQUEST(input:{email:string,quantities:number,product:string}): Promise<IGeneralResponseDTO> {
    return new Promise(
        (resolve, reject) => {
            const query =
                `mutation variables($input:requestInput!){
                    sendProductRequest(input:$input) {
                        success
                        message
                    }
                }`
            const variables = {input}
            graphqlRequestHandler("sendProductRequest", query, variables)
                .then(data => {
                    if (data) {
                        resolve(data)
                    } else {
                        resolve({ success:false, message: "no data" })
                    }
                })
                .catch(error => {
                    console.log("err:", error)
                    reject(error)
                })
        }
    )
};