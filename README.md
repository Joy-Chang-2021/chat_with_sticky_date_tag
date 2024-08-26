# chat room with sticky date

### [Github Page Demo](https://joy-chang-2021.github.io/chat_with_sticky_date_tag)

1. The date tag sticks to the top of the screen and updates as the user scrolls.
2. The input area has a flexible height that adjusts based on the content.

![cover](/public/cover.png)

### core setting for sticky date tag

1. set `position: relative` on the container
2. use one `position: absolute` element for the sticky date tag  
   and regular tags for the daily date tags
3. hide the default scrollbar to prevent small width discrepancies that might cause the sticky and regular date tags to be misaligned  
   `scrollbarWidth: 'none'`  
   `-ms-overflow-style: 'none'`  
   `::-webkit-scrollbar: { display: 'none' }`
4. select each regular date DOM element, monitor its position, and when it reaches a certain point, update the sticky date tag and hide the regular date tag  
   `DOM.getBoundingClientRect()`

### core setting for textarea with flexible height

1. Set the default height using inline style  
   `height: '40px'`
2. On the change event, reset the height to the default value and then adjust it based on the content  
   `el.style.height = '40px';`  
   reset the element's height and allows the browser to recalculate the actual content height (scrollHeight)  
   `` el.style.height = `${el.scrollHeight + 5}px`; ``
   set the element's height to match the content's height.  
   extra 5px accounts for additional padding
