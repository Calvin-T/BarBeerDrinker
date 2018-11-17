from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database

app = Flask(__name__)

@app.route('/api/drinkers', methods=["GET"])
def get_drinkers():
    return jsonify(database.get_drinkers())

@app.route('/api/bars', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route('/api/cities', methods=["GET"])
def get_cities():
    return jsonify(database.get_cities(None))

@app.route('/api/cities/<city>', methods=["GET"])
def get_city(city):
    return jsonify(database.get_cities(city))

@app.route('/api/beers', methods=["GET"])
def get_beers():
    return jsonify(database.get_beers())

@app.route('/api/manufacturer', methods=["GET"])
def get_manfs():
    return jsonify(database.get_manfs(None))

@app.route('/api/frequents-data', methods=["GET"])
def get_bar_frequents():
    return jsonify(database.get_bar_frequents())

@app.route('/api/manufacturer/<name>', methods=["GET"])
def get_manfs_for(name):
    return jsonify(database.get_manfs(name))

@app.route('/api/bars/<name>', methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinkers/<name>', methods=["GET"])
def find_drinker(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers_cheaper_than', methods=["POST"])
def find_beers_cheaper_than():
    body = json.loads(request.data)
    max_price = body['maxPrice']
    return jsonify(database.filter_beers(max_price))


@app.route('/api/menu/<name>', methods=['GET'])
def get_menu(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_bar_menu(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers/<name>', methods=["GET"])
def get_bars_sellings(name):
    try:
        if name is None:
            raise ValueError('Item is not specified.')
        item = database.find_item(name)
        if item is None:
            return make_response("No item found with the given name.", 404)
        return jsonify(database.get_bars_selling(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinkers/<name>/orders_most', methods=["GET"])
def get_drinker_orders_most(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(database.get_drinker_orders_most(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinkers/<name>/transactions', methods=["GET"])
def get_drinker_transactions(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(database.get_drinker_transactions(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bars/<name>/top_spenders', methods=["GET"])
def get_top_spenders(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_largest_spenders(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bars/<name>/most_popular_items', methods=["GET"])
def get_most_popular_items(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_most_popular_items(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bars/<name>/most_popular_manfs', methods=["GET"])
def get_most_popular_manfs(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_most_popular_manfs(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bars/<name>/most_popular_times', methods=["GET"])
def get_most_popular_times_bar(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_most_popular_times_bar(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bars/<name>/most_popular_months', methods=["GET"])
def get_most_popular_months_bar(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_most_popular_months_bar(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers/<name>/most_popular_bars', methods=["GET"])
def get_most_popular_bars(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        beer = database.find_item(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(database.get_most_popular_bar_for_beer(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers/<name>/top_drinkers', methods=["GET"])
def get_top_drinkers(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        beer = database.find_item(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(database.get_top_drinkers_for_beer(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers/<name>/most_popular_times', methods=["GET"])
def get_most_popular_times_beer(name):
    try:
        if name is None:
            raise ValueError('Name is not specified.')
        beer = database.find_item(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(database.get_most_popular_times_beer(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)