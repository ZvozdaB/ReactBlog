import classes from "./Loader.module.css"

export default function Loader(){
    return(
        <div class={classes.wrapper}>
            <div class={classes.circle}></div>
            <div class={classes.circle}></div>
            <div class={classes.circle}></div>
            <div class={classes.shadow}></div>
            <div class={classes.shadow}></div>
            <div class={classes.shadow}></div>
            <span>Loading</span>
        </div>
    )
}