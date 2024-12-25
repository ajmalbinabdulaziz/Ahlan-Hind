'use client'
import Image from "next/image"
import { urlFor } from '../sanity/lib/client'
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism"



export const myPortableTextComponents = {
  types: {
    image: ({value}) => {
      return(
        <div className="relative w-full h-96 m-7 mx-auto">
          <Image 
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            layout="fill"
          />
        </div>
      )},

    code: ({value}) => {

      if (!value || !value.code) { return null }
      const {language, code} = value 
      const [ copy, setCopy ] = useState('Copy')

      return(
        <div className="relative bg-slate-700 rounded-md pt-6"> 

          <div className="absolute right-1 top-1 text-white">
          {language}
          </div>

          <CopyToClipboard text={code} onCopy={() => setCopy("Copied")}
            className="border rounded p-1 w-min absolute right-1 top-10"
          >
            <div>
              <button className="text-green-500">{copy}</button>
            </div>           
          </CopyToClipboard>

          <SyntaxHighlighter language={language || 'text'} style={theme} >
            {code}
          </SyntaxHighlighter>

        </div>
      )

    },
  },


  marks: {
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}
          className="font-light text-blue-500 underline"
        >
          {children}
        </a>
      )
    },

  },

  block: {
    normal: ({children}) => <h1 className="font-serif py-2">{children}</h1>,
    h1: ({children}) => <h1 className="font-semibold text-2xl text-center py-4">{children}</h1>,
    h2: ({children}) => <h1 className="text-xl py-2">{children}</h1>,
    h3: ({children}) => <h1 className="text-lg py-2">{children}</h1>,
    h4: ({children}) => <h1 className="text-md py-2">{children}</h1>,
    sm: ({children}) => <h1 className="text-sm py-2">{children}</h1>,
    xs: ({children}) => <h1 className="text-xs py-2">{children}</h1>,
    blockquote: ({children}) => <blockquote className="border-l-gray-700">{children}</blockquote>,
    codequote: ({children}) => 
      <codequote className="block w-auto bg-slate-200 shadow-md border rounded p-1 overflow-x-scroll
      font-mono italic">
        {children}
      </codequote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),

  },

  list: {
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
    number: ({children}) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },

  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({children}) => <li>✅ {children}</li>,
  },

}
  
