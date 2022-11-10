import React from 'react';

const Blog = () => {
	return (
		<div className="mt-8 lg:min-h-[420px]">
			<div className="flex flex-col divide-y px-8 lg:px-12 xl:px-32 divide-gray-300">
				<details>
					<summary className="py-2 outline-none cursor-pointer text-xl font-medium text-blue-600">
						What are the differences between SQL and NoSQL?
					</summary>
					<div className="px-4 pb-4 text-lg">
						<p>
							SQL databases are primarily called as Relational
							Databases (RDBMS); whereas NoSQL database are
							primarily called as non-relational or distributed
							database. <br />
							SQL use structured Language and predefined schema.
							On the other hand, NoSQL has dynamic schema for
							unstructured data. <br />
							SQL database use foreign key to connect multiple
							table. Where NoSql do not that kind of keys.
						</p>
					</div>
				</details>
				<details>
					<summary className="py-2 outline-none cursor-pointer text-xl font-medium text-blue-600">
						What is JWT, and how does it work?
					</summary>
					<div className="px-4 pb-4 text-lg">
						<p>
							JSON Web Token (JWT) is an open standard (RFC 7519)
							for securely transmitting information between
							parties as JSON object. It is compact, readable and
							digitally signed using a private key/ or a public
							key pair by the Identity Provider(IdP)
							<br />
							JWTs differ from other web tokens in that they
							contain a set of claims. Claims are used to transmit
							information between two parties. What these claims
							are depends on the use case at hand. For example, a
							claim may assert who issued the token, how long it
							is valid for, or what permissions the client has
							been granted. A JWT is a string made up of three
							parts, separated by dots (.), and serialized using
							base64. In the most common serialization format,
							compact serialization, the JWT looks something like
							this: xxxxx.yyyyy.zzzzz. On decode of this token we
							will get two information which we will use to
							authorized an user.
						</p>
					</div>
				</details>
				<details>
					<summary className="py-2 outline-none cursor-pointer text-xl font-medium text-blue-600">
						What is the difference between javascript and NodeJS?
					</summary>
					<div className="px-4 pb-4 space-y-2 text-lg">
						<p>
							JavaScript is a client-side scripting language that
							is lightweight, cross-platform, and interpreted.
							Both Java and HTML include it. Node.js, on the other
							hand, is a V8-based server-side programming
							language. As a result, it is used to create
							network-centric applications. It's a networked
							system made for data-intensive real-time
							applications. If we compare node js vs. python, it
							is clear that node js will always be the preferred
							option.
							<br />
							JavaScript is a simple programming language that can
							be used with any browser that has the JavaScript
							Engine installed. Node.js, on the other hand, is an
							interpreter or execution environment for the
							JavaScript programming language. It requires
							libraries that can be conveniently accessed from
							JavaScript programming to be more helpful.
							<br />
							Any engine may run JavaScript. As a result, writing
							JavaScript is incredibly easy, and any working
							environment is similar to a complete browser.
							Node.js, on the other hand, only enables the V8
							engine. Written JavaScript code, on the other hand,
							can run in any context, regardless of whether the V8
							engine is supported.
						</p>
					</div>
				</details>
				<details>
					<summary className="py-2 outline-none cursor-pointer text-xl font-medium text-blue-600">
						How does NodeJS handle multiple requests at the same
						time?
					</summary>
					<div className="px-4 pb-4 space-y-2 text-lg">
						<p>
							Node.js is an open-source, cross-platform, back-end
							JavaScript runtime environment. It runs on the V8
							engine and executes JavaScript code outside a web
							browser by converting the JS code into machine code.
							It is highly scalable, lightweight, fast, and
							data-intensive.
							<br />
							Node is a single threaded server but can act like
							Multi-Threaded server. When a new request coming in
							is one kind of event. The server starts processing
							it and when there is a blocking IO operation, it
							does not wait until it completes and instead
							registers a callback function. The server then
							immediately starts to process another event . When
							the IO operation is finished, that is another kind
							of event, and the server will process it by
							executing the callback as soon as it has time.
							NodeJS receives multiple client requests and places
							them into EventQueue. NodeJS is built with the
							concept of event-driven architecture. NodeJS has its
							own EventLoop which is an infinite loop that
							receives requests and processes them. EventLoop is
							the listener for the EventQueue.
						</p>
					</div>
				</details>
			</div>
		</div>
	);
};

export default Blog;
