# materialize-loading-box
A Simple widget for showing loading messages using "Materialize Preloader"


## How to use it?

Just use the Materialize Object and after the LoadingBox Object:

```javascript
Materialize.LoadingBox.open("Message loading...")
```

by default, LB uses the circular spinner; if you want to use determinate or indeterminate you should pass the "type" option

```javascript
Materialize.LoadingBox.open(
    "Message loading...",
    {
        type:'ciruclar(default)|determinate|indeterminate', 
        progress: 70 //put this when you use determinate type
    }
)
```

LB is shown at the middle of the page, but you can use the "position" option

```javascript
Materialize.LoadingBox.open(
    "Message loading...", 
    {
        position: 'middle(default)|top_left|top_right|bottom_left|bottom_right'
    }
)
```
