# pp-checkbox-with-text
![Screen](/image/screen.png)

Just a component for react-native. It gives you a special chexbox with the text inside.

##### installation
```` npm install --save pp-chexbox-with-text ````

#### Properties
name | type | description | defaultValue
-- | -- | -- | --
``` text ``` | string | The text which you want to see inside the checkbox | ` Default text for checkbox `
``` checked ``` | boolean | Whether checkbox is checked or not | ``` true ```
``` icon ``` | object | Object which must contain the icon description |
``` icon.name ``` | string | Which icon name must be shown in the checkbox. You can get the name from [`MaterialIcons`](https://www.google.com/design/icons/) by Google, Inc. (v3.0.1, **932** icons) | ``` done ```
``` icon.color ``` | string | Which color this icon would be shown | ``` #524955 ```

### Methods
name | type | description | defaultValue
--|--|--|--
``` onCheck ``` | function | which function would be invoked when somebody press the checkbox | ``` () => {} ```

### Example
```
<Checkbox
    text="checkbox-test"
    checked={false}
    onCheck={()=>{console.log('click')}}
    icon={{name:'face'}}
/>
```
#### Contributing
These tools are still very early in development. So, feel free to make changes.