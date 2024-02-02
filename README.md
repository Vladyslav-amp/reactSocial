
# Social_React

This project is aimed more at training skills. Every React individual component has been written with BEM methodology. Due to its versatility, this component can be used in another project as part of the missing code (ex. Adding product to the list or Log-in/out form). 
There are 5 main section:

 - Product 

 - Customers 

 - Income 

 - Promote 

 - Help

### Product
##### Soon...

### Customers
This section show customers list with personal information and we can find some user by his name, city or phone.

CustomersData I get from my .json file, also I can get data from api using fetch. For creating Table component I used React library - React-table. Its allows to stay flexible and functionaly table`s element. I wrote a functions that return props should be assigned in table elements (thead, tr, tdoby, td), this function get all users from CustomersData by "ID".

I used React.useMemo hook for my columns title and CustomersData inside. Memo used to memoize (remember) the results of calculations for performance optimization.
This hook allows you to remember the input data and use it without recalculation if they have not changed. Which lowers the load on the calculation and helps performance optimization.

Also I created table block with pagination and filter in Javascript without React Hooks. (see CustomersList)

In search block i used React Hook - useGlobalFilter. The global filter allows the user to filter data in all columns at once, which is useful for tables containing a large amount of information.

In pagination block, I got a functions from react-table library (previousPage and nextPage). That minimize code and allows you to speed up the action, then in my button event handler (onClick) i send 

It`s not ready block yet, need to fix and add some style for table.

### Income
##### Soon...

### Promote
##### Soon...

### Help
##### Soon...


## Demo

[DEMO LINK]

## 🛠 Skills
React (Hooks), JavaScript, SASS, HTML

