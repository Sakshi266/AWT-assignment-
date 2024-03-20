
{
    const x = 10;
    console.log(" block1:", x); 
    

    {
        const x = 20; 
        console.log(" block2:", x); 
    }
    
    console.log(" block1 after  block2:", x); 
}
