import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={() => {}} className="h-full w-1/3 space-y-6">
        <div className="flex flex-col items-start w-full justify-start">
          <h1 className="text-xl font-semibold">Tutorial Email</h1>
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-light text-gray-500">
            Subject
          </label>
          <input
            name="title"
            type="text"
            id="title"
            required
            
            onChange={() => {
              
            }}
            placeholder="What will you title this goal?"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-light text-gray-500">
            What would you need help with?
          </label>
          <textarea
            name="description"
            id="description"
            required
            cols={10}
            rows={5}
            value={''}
            onChange={() => {
              
            }}
            placeholder="What will you title this goal?"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <button type='submit' className="ml-auto flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md">
          <span>Send Message</span>
        </button>
      </form>
    </main>
  )
}

export default page
