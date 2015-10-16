# Spincrement

A jQuery plugin for incrementing up to a certain number, for effect.

See it in action [here](https://rawgit.com/johnjcamilleri/jquery-spincrement/master/demo.html).

## Usage

```
$('#selector').spincrement(options)
```

## Options

| Name              | Default | Description |
|-------------------|---------|-------------|
| from              | 0       |             |
| to                | false   |             |
| decimalPlaces     | 0       |             |
| decimalPoint      | '.'     |             |
| thousandSeparator | ','     |             |
| duration          | 1000    | Total length of animation (ms) |
| leeway            | 50      | Amount to which duration may randomly vary (percent) |
| easing            | 'spincrementEasing' | Function ... |
| fade              | true    | Use fade effect |
| complete          | null    | Callback function called when animation is done |


## TO DO

- Detect number of decimal places automatically
- Detect thousand separators in start value
- Check easing function
