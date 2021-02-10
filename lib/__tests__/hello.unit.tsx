function add(a: number, b: number) {
  return a + b;  
}

describe('First Test', ()=>{
  it('add(1, 2) == 3', ()=>{
    expect(add(1, 2)).toEqual(3);
  })
})
