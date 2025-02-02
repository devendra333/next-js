
export const dynamic = "force-static"; // Allow dynamic behavior
// if we still rreload this pafge in dev mode , then we wil see to opage to refresh: reason is there is no caching in development
// So we have to a prod bild and then test 

// so what if we wante to rebuild teh darta wiothout building the  entirtr applcation ?
//  revalidat ecached daat using inmcremenetal re-geneation
export const revalidate = 10; // revalidate every 10 seconds
// so after 10- secondsm, the ui will stiull show old trime, while new code has been genearted for the upodated timestamp 
// so necxt time you hit this  , you will be able to see the fresh data 



// caching can be onlu wwith get method
// if youy are using dynamiv functions like headers(0 and cookies(0, or wolimng with requerst objecvt , then caching wont get applied))

export async  function GET() {
    return Response.json({time: new Date().toLocaleTimeString()})
}