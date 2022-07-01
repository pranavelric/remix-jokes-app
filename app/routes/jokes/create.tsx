import React from 'react'

export default function create() {
  return (
    <div>
    <p>Add your own hilarious joke</p>
    <form method="post">
      <div>
        <label>
          Name: <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          Content: <textarea name="content" />
        </label>
      </div>
      <div>
        <button type="submit" className="button">
          Add
        </button>
      </div>
    </form>
  </div>
  )
}
