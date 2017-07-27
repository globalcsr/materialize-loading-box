# materialize-loading-box
A Simple widget for showing loading messages using "Materialize Preloader"

## [view demo](https://potter777.github.io/materialize-loading-box/)

## How to use it?

Just use the Materialize Object and after the LoadingBox Object:

```javascript
Materialize.LoadingBox.open("Message loading...")
Materialize.LoadingBox.close()
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

## Methods 

```javascript
Materalize.LoadingBox.open(message, options) // Open the LoadingBox
Materialize.LoadingBox.close()  // Close the LoadingBox
Materialize.LoadingBox.updateText(message) // update the message of the LB, useful when you are doing many process and you want to report what is happening
Materialize.LoadingBox.updateProgress(progress) // set the progress when your're using determinate type, if you are using the closeOnFinishProgress option, the LoadingBox will be closed.
```




## Plugin options

|   Option  | Data type |   Applied to      | Description | values  |
| --------- | --------- | ---------------   | ----------- | ------- |   
| type      | string    |                   | set the preloader type. (Default: circular)               | circular, determinate, indeterminate|
| color     | string    | all option type   | set the color what you want to show. (Default: blue)      | blue, red, green, yellow, flashing (this only for circular type)  |
| size      | string    | circular          | set the size of the circular spinner. (Default: medium)   | small, medium, big| 
| position  | Integer   |                   | set the position of the Loading Box. (Default: middle)    | middle, top_left, top_rght, bottom_left, bottom_right |
| progress  | Integer   | determinate       | set the value for the progress bar    | {1..100}  |
| closeOnFinishProgress | boolean           | determinate |when you are using determinate type and progress option >= 100, the loading box will be closed. (Default: false)    | boolean values | 


