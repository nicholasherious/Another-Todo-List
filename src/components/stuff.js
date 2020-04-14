<div>
           {todo.task}
           <button onClick={onHandleRemoveClick}>Remove</button>
            
        </div>

<div>   
<form onSubmit={handleSubmit}>
               
                
                <button type="submit">Submit</button>
            </form>
        </div>


 <input 
                type="text" 
                placeholder="type todo" 
                value={value.task} 
                onChange={handleChange}
                />