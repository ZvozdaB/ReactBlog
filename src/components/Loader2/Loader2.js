import classes from "./Loader2.module.css"

export default function Loader2(){
    return(
            <div class={classes.container}>
                <span class={classes.circle}></span>
                <span class={classes.circle}></span>
                <span class={classes.circle}></span>
                <span class={classes.circle}></span>
            </div>
    )
}