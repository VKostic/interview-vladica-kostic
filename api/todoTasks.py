from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

todoTasks = Flask(__name__)
todoTasks.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///todotasks.db"
db = SQLAlchemy(todoTasks)

class TodoTasks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

def todo_serializer(item):
    return {
        'id': item.id,
        'content': item.content
    }
    
@todoTasks.route('/api/', methods=['GET'])
def index():
    return jsonify([*map(todo_serializer, TodoTasks.query.all())])

@todoTasks.route('/api/new', methods=['POST'])
def newItem():
    request_item = json.loads(request.data)
    todoTasks = TodoTasks(content=request_item['content'])

    db.session.add(todoTasks)
    db.session.commit()
    return

@todoTasks.route('/api/<int:id>')
def view(id):
    return jsonify([*map(todo_serializer, TodoTasks.query.filter_by(id=id))])

@todoTasks.route('/api/edit/<int:id>', methods=['POST'])
def edit(id):
    request_item = json.loads(request.data)
    TodoTasks.query.filter_by(id=request_item['id']).update(dict(content=request_item['content']))
    db.session.commit()
    return

if __name__ == "__main__":
    todoTasks.run(host="0.0.0.0", port=5000, debug=True)
