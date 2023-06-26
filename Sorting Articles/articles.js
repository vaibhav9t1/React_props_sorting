import React from 'react';

function Articles(props) {

    let art = props.articles;
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                  {
                    art.map(idx =>{
                     return <tr data-testid="article" key={idx.date}>
                     <td data-testid="article-title">{idx.title}</td>
                     <td data-testid="article-upvotes">{idx.upvotes}</td>
                     <td data-testid="article-date">{idx.date}</td>
                    </tr>
                    })
                  }
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
