from sqlalchemy import create_engine
from sqlalchemy import sql
from BarBeerDrinker import config

engine = create_engine(config.database_uri)
def get_bars():
    """
    Connect to the database and retrieve a list of all the bars and their information
    """
    with engine.connect() as con:
       rs = con.execute("SELECT BarName, License, City, Number, Address FROM bars;")
       return [dict(row) for row in rs]

def get_drinkers():
    with engine.connect() as con:
        rs = con.execute("SELECT * FROM drinkers") 
        return [dict(row) for row in rs]   

def get_beers():
    with engine.connect() as con:
        rs = con.execute("SELECT * FROM beers")   
        return [dict(row) for row in rs]

def get_manfs(name):
    with engine.connect() as con:
        if name is None:
            rs = con.execute("SELECT DISTINCT Manf FROM beers")
            return [row['Manf'] for row in rs]
        query = sql.text(
            'SELECT Manf FROM beers WHERE Name = :name'
        )
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return result['Manf']

def get_cities(city):
    with engine.connect() as con:
        if city is None:
            rs = con.execute("SELECT DISTINCT city FROM drinkers")
            return [dict(row) for row in rs]
        query = sql.text(
            "Select distinct city From drinkers where city =:city"
        )
        rs = con.execute(query, city=city)
        result = rs.first()
        if result is None:
            return None
        return result['city']

def get_bar_frequents():
    with engine.connect() as con:
        query = sql.text(
            'SELECT bar, COUNT(drinker) as Frequents\
            FROM frequents\
            GROUP BY bar\
            ORDER BY bar'
        )
        rs = con.execute(query)
        return [dict(row) for row in rs]

def get_bars_selling(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT s.bar, s.price, COUNT(f.bar) as Customers\
            FROM sells s \
            INNER JOIN frequents f ON s.bar = f.bar \
            WHERE s.item = :name \
            GROUP BY bar \
            ORDER BY bar'
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['price'] = float(r['price'])
        return results

def find_bar(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT BarName, License, City, Number, Address FROM bars WHERE BarName = :name;"
        )

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def find_drinker(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * FROM drinkers WHERE drinker = :name;"
        )
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def find_item(name):
    with engine.connect() as con:
        query = sql.text(
            "(SELECT Manf, Name FROM beers WHERE Name = :name) \
            UNION \
            (SELECT null, Name FROM foods WHERE Name = :name)"
        )
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def filter_beers(max_price):
       with engine.connect() as con:
           query = sql.text(
               "SELECT * FROM sells WHERE price < :max_price;"
            )
           rs = con.execute(query, max_price=max_price)
           results = [dict(row) for row in rs]
           for r in results:
               r['price'] = float(r['price'])
           return results
        
def get_bar_menu(bar_name):
       with engine.connect() as con:
           query = sql.text(
               'SELECT l2.item, l2.price, l2.Manf, COUNT(l.item) as Likes\
                FROM likes as l, \
                ((SELECT a.item, a.price, b.Manf \
                FROM sells as a \
                JOIN beers AS b \
                ON a.item = b.name \
                WHERE a.bar = :bar) \
                UNION \
                (SELECT item,price,null \
                FROM sells \
                WHERE bar = :bar and item NOT IN (SELECT name FROM beers))) \
                as l2 \
                WHERE l.item = l2.item \
                GROUP BY item\
                ORDER BY price DESC\
           ')
           rs = con.execute(query, bar=bar_name)
           results = [dict(row) for row in rs]
           for i, _ in enumerate(results):
               results[i]['price'] = float(results[i]['price'])
           return results

def get_drinker_orders_most(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT item, COUNT(item) as ordered \
            FROM transactions \
            WHERE drinker = :name \
            GROUP BY item'
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        return results

def get_drinker_transactions(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT t1.id, t1.bar, t1.ttime as time, t1.ddate as date, t2.total \
            FROM transactions t1 \
            INNER JOIN total t2 ON t1.id = t2.id \
            WHERE drinker = :name \
            GROUP BY t1.id \
            ORDER BY ddate, bar'
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        return results

def get_largest_spenders(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT DISTINCT t1.id, t2.drinker, t2.barName, t1.total \
            FROM total t1 \
            INNER JOIN  \
            (SELECT t.id, t.drinker, b.barName \
            FROM transactions t \
            INNER JOIN bars b ON t.bar = b.barName \
            WHERE barName = :name) as t2 \
            ON t1.id = t2.id'
        )
        rs = con.execute(query, name = name)
        results = [dict(row) for row in rs]
        return results

def get_most_popular_items(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT item, COUNT(item) as orders \
            FROM transactions \
            WHERE bar = :name \
            GROUP BY item \
            ORDER BY COUNT(item) Desc'
        )
        rs = con.execute(query, name = name)
        results = [dict(row) for row in rs]
        return results

def get_most_popular_manfs(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT Manf, COUNT(Manf) as orders \
            FROM transactions t \
            INNER JOIN beers b ON t.item = b.Name \
            WHERE bar = :name \
            GROUP BY Manf \
            ORDER BY COUNT(Manf) Desc' \
        )
        rs = con.execute(query, name = name)
        results = [dict(row) for row in rs]
        return results

def get_most_popular_times_bar(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT ttime, COUNT(ttime) as orders \
            FROM transactions \
            WHERE bar = :name \
            GROUP BY ttime' 
        )
        rs = con.execute(query, name = name)
        results = [dict(row) for row in rs]
        return results

def get_most_popular_times_beer(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT ttime, COUNT(ttime) as orders \
            FROM transactions  \
            WHERE item = :name \
            GROUP BY ttime \
            ORDER BY COUNT(ttime) desc'
        )
        rs = con.execute(query, name = name)
        results = [dict(row) for row in rs]
        return results

def get_most_popular_months_bar(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT MONTH(ddate) as month, COUNT(MONTH(ddate)) as orders \
            FROM \
            (SELECT DISTINCT * \
            FROM transactions \
            WHERE bar = :name \
            GROUP BY id \
            ORDER BY MONTH(ddate) \
            ) as t1 \
            GROUP BY MONTH(ddate)'\
        )
        rs = con.execute(query, name = name)
        results = [dict(row) for row in rs]
        return results

def get_most_popular_bar_for_beer(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT bar, COUNT(bar) as orders \
            FROM transactions \
            WHERE item = :name \
            GROUP BY bar \
            ORDER BY COUNT(bar) Desc'
        )
        rs = con.execute(query, name = name)
        results = [dict(row) for row in rs]
        return results

def get_top_drinkers_for_beer(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT drinker,  COUNT(drinker) as orders \
            FROM transactions \
            WHERE item = :name \
            GROUP BY drinker \
            ORDER BY COUNT(drinker) desc'
        )
        rs = con.execute(query, name = name)
        results = [dict(row) for row in rs]
        return results
