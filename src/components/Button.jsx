import React from "react";

export default function Button({
    children,                  // What the button shows
    type = "button",           // What kind of button it is
    bgColor = "bg-blue-600",   // How it looks
    textColor = "text-white",  // Any other button features (click event, disabled, id, etc)
    className = "",
    ...props
}) {
    return (
        <button
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}